import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../../commons/constants/routes-path';
import PageTitle from '../../components/PageTitle';
import ProjectTable from '../../containers/ProjectTable';

function Home() {

  const navigate = useNavigate();

  const actionButtonProps = {
    label: 'Novo projeto',
    action: () => navigate(`${ROUTE_PATHS.project}/novo-projeto`)
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%"}}>
      <div style={{ width: "800px", paddingTop: "48px" }}>
        <PageTitle title="Projetos" actionButton={actionButtonProps} />
        <ProjectTable />
      </div>
    </div>
  );
}

export default Home;