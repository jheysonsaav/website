// Copyright (C) Jheyson Saavedra ~ All right reserved.
use actix_web::{error::InternalError, http::StatusCode, HttpResponse};
use sailfish::TemplateOnce;
use std::env;

pub struct PageMeta {
    pub title: String,
    pub description: String,
    pub keywords: String,
}

#[derive(TemplateOnce)]
#[template(path = "app.stpl")]
struct Page<'a> {
    page_name: &'a str,
    page_lang: String,
    page_url: String,
    page_meta: PageMeta,
    page_styles: String,
    nav_items: Vec<String>,
}

pub fn get_current_dir() -> String {
    if let Ok(current_directory) = env::current_dir() {
        let mut current_directory: String = current_directory.to_str().unwrap_or("").to_string();

        if !current_directory.ends_with("/") {
            current_directory.push_str("/");
        }

        current_directory
    } else {
        String::new()
    }
}

pub fn get_scss_content(path: &str) -> grass::Result<String> {
    grass::from_path(
        path,
        &grass::Options::default().style(grass::OutputStyle::Compressed),
    )
}

pub fn render(page_name: &str, page_meta: PageMeta) -> actix_web::Result<HttpResponse> {
    let styles_rute: String = format!("{}assets/scss/pages/{}.scss", get_current_dir(), page_name);

    let template = Page {
        page_name: page_name,
        page_lang: String::from("en"),
        page_url: String::from("http://localhost:8080"),
        page_meta: page_meta,
        page_styles: get_scss_content(&styles_rute).expect("asd"),
        nav_items: vec![String::from("Home:/"), String::from("Projects:/projects")],
    };

    Ok(HttpResponse::Ok().content_type("text/html").body(
        template
            .render_once()
            .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?,
    ))
}
