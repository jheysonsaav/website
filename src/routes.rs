use crate::templates;
use actix_web::{get, HttpRequest, HttpResponse};

#[get("/")]
pub async fn home_route(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    let home_meta = templates::PageMeta {
        title: String::from("Home"),
        description: String::from("I am a geek developer and this is my website"),
        keywords: String::from("JheysonDev, Jheyson Saavedra, Development, Rust, Deno, TypeScript, Sowftware, Design, Blog"),
    };

    return templates::render_template("home", home_meta, req);
}

#[get("*")]
pub async fn error404_route(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    let error404_meta = templates::PageMeta {
        title: String::from("Page not found"),
        description: String::from("The page you were looking for could not be found and a 404 error occurred "),
        keywords: String::from("JheysonDev, Jheyson Saavedra, Development, Rust, Deno, TypeScript, Sowftware, Design, Blog")
    };

    return templates::render_template("error404", error404_meta, req);
}
