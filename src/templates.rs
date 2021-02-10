use crate::utils::{get_current_dir, get_scss_content};
use actix_web::{error::InternalError, http::StatusCode, HttpRequest, HttpResponse};
use sailfish::TemplateOnce;

/// this structure is used in the head of the template
pub struct PageMeta {
    pub title: String,
    pub description: String,
    pub keywords: String,
}

#[derive(TemplateOnce)]
#[template(path = "app.stpl")]
struct PageProps<'a> {
    page_name: &'a str,
    page_lang: String,
    page_meta: PageMeta,
    page_styles: String,
    nav_items: Vec<String>,
}

pub fn render_template(
    page_name: &str,
    page_meta: PageMeta,
    _req: HttpRequest,
) -> actix_web::Result<HttpResponse> {
    let styles_rute: String = format!("{}assets/scss/pages/{}.scss", get_current_dir(), page_name);

    let template = PageProps {
        page_name: page_name,
        page_lang: String::from("en"),
        page_meta: page_meta,
        page_styles: get_scss_content(&styles_rute).expect("Styles not found"),
        nav_items: vec![String::from("Home:/"), String::from("Projects:/projects")],
    };

    Ok(HttpResponse::Ok().content_type("text/html").body(
        template
            .render_once()
            .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?,
    ))
}
