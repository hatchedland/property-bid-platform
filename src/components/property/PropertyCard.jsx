import React from 'react';
import { ArrowDown, ArrowRight, Clock, Droplet, Home, Message } from 'iconoir-react';
import { Link } from 'react-router-dom';

export const PropertyCard = ({ property }) => {
    const propertyId = property.propertyID;

    return (
        <div className='rounded-xl shadow-md border w-fit p-10'>
            <div className='flex justify-between'>
                <div>#{property.propertyID}</div>
                {/* <div>{property.status}</div> */}
            </div>

            <div className='max-w-xl text-2xl py-12'>
                <span>{property.propertySubType}</span> in <span>{property.city}</span>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className='flex items-center gap-4 bg-gray-50 p-4'>
                    <div><Home /></div>
                    <div className='flex flex-col'>
                        <label htmlFor='Ownership Type' className='opacity-75 text-sm'>Ownership Type</label>
                        <span typeof='Ownership Type' className='text-xl'>{property.ownershipType}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 bg-gray-50 p-4'>
                    <div><Droplet /></div>
                    <div className='flex flex-col'>
                        <label htmlFor='Reserve Price' className='opacity-75 text-sm'>Reserve Price</label>
                        <span typeof='Reserve Price' className='text-xl'>{property.reservePrice}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 bg-gray-50 p-4'>
                    <div><Clock /></div>
                    <div className='flex flex-col'>
                        <label htmlFor='Auction date' className='opacity-75 text-sm'>Auction Started</label>
                        <span typeof='Auction date' className='text-xl'>{property.auctionOpenDate}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 bg-gray-50 p-4'>
                    <div><Message /></div>
                    <div className='flex flex-col'>
                        <label htmlFor='Auction date' className='opacity-75 text-sm'>Auction Closed</label>
                        <span typeof='Auction date' className='text-xl'>{property.auctionCloseDate}</span>
                    </div>
                </div>
            </div>

            <div className='flex justify-between py-8'>
                <Link to={`/property/${propertyId}`} className='flex items-center gap-2 cursor-pointer'>
                    <div className='border-2 p-2 rounded-full text-rose-600 border-rose-600'>
                        <ArrowDown />
                    </div>
                    <div className='font-bold text-rose-600'>More details</div>
                </Link>


                <Link to={`/contact/${propertyId}`} className='flex items-center gap-2 cursor-pointer'>
                    <div className='flex items-center gap-2 py-2 px-6 bg-rose-600 text-white rounded-md'>
                        <div className='font-semibold'>Interested</div>
                        <div className='p-2'>
                            <ArrowRight />
                        </div>
                    </div>
                </Link>


            </div>
        </div>
    );
};
