import React from 'react'
import Table from "../../components/Table/Table"
import './MobiliserPayments.css'


const rowData = [
  {srNo: '', id:'', name:"", fatherName:'', action:'', status:''},
  {srNo: '', id:'', name:"", fatherName:'', action:'', status:''},
  {srNo: '', id:'', name:"", fatherName:'', action:'', status:''},
  {srNo: '', id:'', name:"", fatherName:'', action:'', status:''},
]
export default function MobiliserPayments() {
  return (
    <div className='p-main-container'>
      <h3 className='p-heading'>Payments Records</h3>
      <Table rows={rowData}/>
    </div>
  )
}
