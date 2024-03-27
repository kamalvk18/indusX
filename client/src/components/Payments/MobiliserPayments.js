import React from 'react'
import Table from "../../components/Table/Table"
import './MobiliserPayments.css'
import CustomTable from '../CustomTable/CustomTable'

const tableHeaders = [
  'Serial Number', 'Candidate ID', 'Name', "Father's Name", 'Action', 'Status'
]
const rowData =  ['Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty']

// const rowData = [
//   {srNo: '', id:'', name:"", fatherName:'', action:'', status:''},
//   {srNo: '', id:'', name:"", fatherName:'', action:'', status:''},
//   {srNo: '', id:'', name:"", fatherName:'', action:'', status:''},
//   {srNo: '', id:'', name:"", fatherName:'', action:'', status:''},
// ]
export default function MobiliserPayments() {
  return (
    <div className='p-main-container'>
      <h3 className='p-heading'>Payments Records</h3>
      {/* <Table rows={rowData}/> */}
      <CustomTable tableHeaders={tableHeaders} rows={rowData} />
    </div>
  )
}
