import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import axios from "axios";

function ProjectsPage(): JSX.Element {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios.get("/api/projects")
      .then((response) => {
        setRepos(response.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="text-center">
      <Header />
      <h1 className="text-blue-500 text-3xl font-bold pt-2 underline">
        Projects
      </h1>
      <div className="grid grid-cols-1 gaps-4 md:grid-cols-4 sm:grid-cols-2">
        {
          repos.map(repo => (
            <div key={repo.id} className="rounded-sm bg-gray-600 m-2">
              <h1 className="underline text-pink-500">{repo.name}</h1>
              <p>{repo.description || "No description"}</p>
            </div>
          ))
        }
      </div> 
    </div>
  );
}

export default ProjectsPage;
