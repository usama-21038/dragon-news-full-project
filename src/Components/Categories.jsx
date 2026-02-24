import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise=fetch("/public/demo-data/categories.json").then((res)=>res.json())


const Categories = () => {
    const categories=use(categoryPromise);

    return (
        <div>
            <h1 className='font-bold'>All Categories ({categories?.length || 0})</h1>
            <div className='flex flex-col gap-2 mt-3'>
                {
                    categories.map(category=><NavLink key={category.id}  className="hover:bg-gray-200 btn bg-white border-0"
                    to={`/category/${category.id}`}
                    >{category.name}</NavLink>)
                }
            </div>

        </div>
    );
};

export default Categories;