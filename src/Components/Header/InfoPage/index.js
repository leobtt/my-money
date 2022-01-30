import { Dashboard as DashboardIcon } from '@mui/icons-material/'

const InfoPage = () => {
  return (
    <header className="header">
      <div className="dashboard">
        <DashboardIcon sx={{ fontSize: 50 }} />
        <div>
          <h2 className="text-shadow">Dashboard</h2>
          <p className="text-shadow">Informações do mês</p>
        </div>
      </div>
      <h1>My Money</h1>
    </header>
  )
}

export default InfoPage
