import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { read } from '../api/product'

type Props = {}
type FormInPuts = {
    name : string,
    price : number,
    title : string
}

const ProductEdit = (props: Props) => {
    const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInPuts>();
    const {id} = useParams();
    useEffect(() => {
        const getProduct = async () => {
            const {data} = await read(id);
            reset(data);
        }
        getProduct();
    },[]);
    const onSubmit : SubmitHandler<FormInPuts> = data => {
        console.log(data);
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} action="">
            <input type="text" {...register('name', {required: true, minLength: 5})} />
            {errors.name && errors.name.type === "required" && <span>Nhập vào name </span>}
            {errors.name && errors.name.type === "minLength" && <span>Không được dưới 5 ký tự</span>}
            <input type="text" {...register('price', {required: true, minLength: 3})} />
            {errors.price && errors.price.type === "required" && <span>Nhập vào giá sản phẩm</span>}
            {errors.price && errors.price.type === "minLength" && <span>Không được dưới 3 ký tự</span>}
            <input type="text" {...register('title', {required: true, minLength: 3})} />
            {errors.title && errors.title.type === "required" && <span>Nhập vào mô tả sản phẩm</span>}
            {errors.title && errors.title.type === "minLength" && <span>Không được dưới 3 ký tự</span>}
            <button>Thêm sản phẩm</button>
        </form>
    </div>
  )
}

export default ProductEdit