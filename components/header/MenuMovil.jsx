import React from 'react';

export const MenuMovil = ({data}) => {
  return (
    <li>
        <li className='mx-3 my-2'>
            <a className='select-none cursor-pointer' href={data.link}>
              {data.title}
            </a>
        </li>
    </li>
  )
}
