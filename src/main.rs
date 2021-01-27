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
    let host = env::var("HOST").unwrap_or(String::from("localhost"));
    let port = env::var("PORT").unwrap_or(String::from("8080").parse().expect("port is not valid"));

    HttpServer::new(|| {
        App::new()
            .service(actix_files::Files::new("/static/", "static/").show_files_listing())
            .service(home)
    })
    .bind(format!("{}:{}", host, port).as_str())?
    .run()
    .await
}
