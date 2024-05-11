import React from "react";
import PropTypes from "prop-types";
import TableItem from "./TableItem";
import "./styles.css"

const ProjectTable = () => {
    return (
        <div className="table-container">
            <div className="row">
                <div className="col-7 description-colunm">
                    <h4>Título</h4>
                </div>
                <div className="col-3 value-colunm">
                    <h4>Custo total</h4>
                </div>
                <div className="col-2 action-colunm">
                    <h4>Ações</h4>
                </div>
            </div>
            <TableItem name="Projeto novo" description="Descricao do projeto" value={10000} />
            <TableItem name="Projeto novo" description="Descricao do projeto" value={10000} />
            <TableItem name="Projeto novo" description="Descricao do projeto" value={10000} />
        </div>
    )
}

export default ProjectTable;