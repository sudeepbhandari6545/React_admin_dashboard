import React from 'react'
import { Header } from '../components'
import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  Filter,
  GridComponent,
  Inject,
  Page,
  Selection,
  Sort,
  Toolbar,
} from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'

const Customer = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Pages" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
        }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Filter, Sort]} />
      </GridComponent>
    </div>
  )
}

export default Customer
