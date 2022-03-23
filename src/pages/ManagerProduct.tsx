import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'

type ManagerProductProps = {
    data: ProductType[];
    onRemove: (id: number) => void
}

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div>
      <h2>
        <Link to={`/admin/product/add`}>Thêm sản phẩm mới</Link>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={`/admin/product/${item.id}/edit`}>Chỉnh sửa</Link>
                    <button onClick={() => props.onRemove(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ManagerProduct