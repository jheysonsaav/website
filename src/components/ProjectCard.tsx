/* -- Copyright (C) JheysonDev ~ All right reserved -- */
import React, { Component } from "react";

class ProjectCard extends Component<ProjectCardProps> {
  render() {
    return (
      <>
        <div className="project_card_containner">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
      </>
    );
  }
}
export default ProjectCard;
