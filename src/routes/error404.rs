use actix_web::{get, HttpRequest, HttpResponse};

#[get("*")]
pub async fn error404_route(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    let error404_meta = super::PageMeta {
        title: String::from("Page not found"),
        description: String::from("The page you were looking for could not be found and a 404 error occurred "),
        keywords: String::from("JheysonDev, Jheyson Saavedra, Development, Rust, Deno, TypeScript, Sowftware, Design, Blog")
    };

    return super::render_template("error404", error404_meta, req);
}
