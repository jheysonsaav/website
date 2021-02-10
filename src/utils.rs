use std::env;

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
