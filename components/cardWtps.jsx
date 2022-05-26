import React from 'react';
import Image from 'next/image';


export const CardWtps = ({styles, img}) => {
    return (
        <div>
            <div>
                <div className="flex justify-center mb-2">
                    <Image src={img} alt="Logo" width={40} height={40}/>
                </div>
                <div>
                    <p className={styles}>Escríbenos por Whatsapp</p>
                </div>
            </div>
        </div>
    )
}
