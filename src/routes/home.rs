use actix_web::{get, HttpRequest, HttpResponse};

#[get("/")]
pub async fn home_route(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    let home_meta = super::PageMeta {
        title: String::from("Home"),
        description: String::from("I am a geek developer and this is my website"),
        keywords: String::from("JheysonDev, Jheyson Saavedra, Development, Rust, Deno, TypeScript, Sowftware, Design, Blog"),
    };

    return super::render_template("home", home_meta, req);
}
