// Copyright (C) Jheyson Saavedra ~ All right reserved.
mod template;

use actix_web::{get, App, HttpResponse, HttpServer};
use std::env;

#[get("/")]
async fn home() -> actix_web::Result<HttpResponse> {
    template::render("home")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Get host and port envs
    let host: String = String::from("0.0.0.0");
    let port: u16 = env::var("PORT")
        .unwrap_or(String::from("8080"))
        .parse()
        .expect("port is not valid");

    HttpServer::new(|| {
        App::new()
            .service(actix_files::Files::new("/static/", "static/").show_files_listing())
            .service(home)
    })
    .bind((host, port))?
    .run()
    .await
}
