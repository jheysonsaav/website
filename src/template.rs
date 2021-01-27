// Copyright (C) Jheyson Saavedra ~ All right reserved.
use actix_web::{error::InternalError, http::StatusCode, HttpResponse};
use sailfish::TemplateOnce;

struct PageMeta<'a> {
    title: String,
    description: String,
    keywords: &'a str,
}

#[derive(TemplateOnce)]
#[template(path = "app.stpl")]
struct Page<'a> {
    page_name: &'a str,
    page_lang: String,
    page_url: String,
    page_meta: PageMeta<'a>,
}

pub fn render(page_name: &str) -> actix_web::Result<HttpResponse> {
    let template = Page {
        page_name: page_name,
        page_lang: String::from("en"),
        page_url: String::from("http://localhost:8080"),
        page_meta: PageMeta {
            title: String::from("Home"),
            description: String::from("This home"),
            keywords: "JheysonDev, Jheyson Saavedra, Development, Rust, Deno, TypeScript, Sowftware, Design, Blog",
        },
    };

    Ok(HttpResponse::Ok().content_type("text/html").body(
        template
            .render_once()
            .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?,
    ))
}
