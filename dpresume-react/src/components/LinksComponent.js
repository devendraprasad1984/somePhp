import React, {Component} from 'react'

export default class LinksComponent extends Component {
    render() {
        return (
            <span>
                <a href="http://dpresume.com/older/docs/Devendra_Prasad_sidebar.pdf" rel="noopener noreferrer"
                   target="_blank"><i className="fas fa-download" aria-hidden="true"></i></a>
                <a href="http://dpresume.com/older/docs/dp_cover_letter.pdf" rel="noopener noreferrer"
                   target="_blank"><i className="fas fa-download" aria-hidden="true"></i></a>
                <a rel="noopener noreferrer" target="_blank"
                   href="http://dpresume.com/older/docs/pythonTrainingKIT.pdf"><i className="fab fa-python"
                                                                                  aria-hidden="true"></i></a>
                <a rel="noopener noreferrer" target="_blank"
                   href="http://dpresume.com/older/docs/aws-symbi-project.pdf"><i className="fas fa-cloud"
                                                                                  aria-hidden="true"></i></a>
                <a rel="noopener noreferrer" target="_blank"
                   href="http://dpresume.com/older/docs/aws-dev-associate-notes.pdf"><i
                    className="fab fa-aws"></i></a>
            </span>
        )
    }
}