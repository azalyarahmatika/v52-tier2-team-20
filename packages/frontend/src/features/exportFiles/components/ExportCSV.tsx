import { exportCSV } from '@/src/utils/exportCSV'
import Button from '@/src/components/Button'
import { appointmentRequests } from '@/src/asset/mockData/appointmentRequests'

// TODO pass the fetched data
const ExportCSV = () => {
  const handleExport = () => {
    exportCSV({
      data: appointmentRequests,
      fileName: 'scheduled_appointments.csv',
    })
  }

  return <Button onClick={handleExport}>Export CSV</Button>
}

export default ExportCSV