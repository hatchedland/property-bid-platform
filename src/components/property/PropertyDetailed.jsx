import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

import { ArrowDown, ArrowRight, Bookmark, Clock, Droplet, Home, Message } from 'iconoir-react';

import { Navbar } from '../navbar/Navbar';

export const PropertyDetailed = () => {
    const { propertyId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [propertyData, setPropertyData] = useState(null);

    useEffect(() => {
        const fetchPropertyData = async () => {
            try {
                const response = await fetch('https://auction-center-default-rtdb.firebaseio.com/.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                let property = null;
            // Iterate over the properties to find the one with matching propertyId
            Object.keys(data).forEach(key => {
                if (data[key].propertyID === propertyId) {
                    property = data[key];
                }
            });
                if (!property) {
                    throw new Error('Property not found');
                }
                setPropertyData(property);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching property data:', error);
                setError(error);
                setIsLoading(false);
            }
        };


        fetchPropertyData();
    }, [propertyId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!propertyData) {
        return <div>Property not found.</div>;
    }


    return (
        <div>
            <Navbar />
            <div className='p-16 max-w-7xl mx-auto'>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <div>#{propertyData.propertyID}</div>
                        <div>{propertyData.status}</div>
                    </div>

                    <div className="flex gap-2 justify-between">
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
                <div className='max-w-xl text-2xl py-12'>
                    <span>{propertyData.propertySubType}</span> in <span className='capitalize'>{propertyData.city}</span>
                </div>
                <div className="flex gap-6">
                    <div className='flex items-center gap-6 bg-gray-50 p-6'>
                        <div><Home /></div>
                        <div className='flex flex-col'>
                            <label htmlFor='Ownership Type' className=' opacity-75 text-sm'>Ownership Type</label>
                            <span typeof='Ownership Type' className='text-xl'>{propertyData.ownershipType}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-6 bg-gray-50 p-6'>
                        <div><Droplet /></div>
                        <div className='flex flex-col'>
                            <label htmlFor='Reserve Price' className=' opacity-75 text-sm'>Reserve Price</label>
                            <span typeof='Reserve Price' className='text-xl'>{propertyData.reservePrice}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-6 bg-gray-50 p-6'>
                        <div><Clock /></div>
                        <div className='flex flex-col'>
                            <label htmlFor='Auction date' className=' opacity-75 text-sm'>Auction Started</label>
                            <span typeof='Auction date' className='text-xl '>{propertyData.auctionOpenDate}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-6 bg-gray-50 p-6'>
                        <div><Message /></div>
                        <div className='flex flex-col'>
                            <label htmlFor='Auction date' className=' opacity-75 text-sm'>Auction Closed</label>
                            <span typeof='Auction date' className='text-xl'>{propertyData.auctionCloseDate}</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-between gap-12 w-fit py-16'>

                    <div className="container flex gap-12 w-fit">
                        {/* Property details */}
                        <div className='border max-w-xl py-6 px-12 bg-white shadow-sm bg-clip-border rounded-xl'>
                            <h1 className='text-2xl font-bold py-4 opacity-60'>Property details</h1>
                            <div className='flex flex-col gap-6'>
                                <div className='grid grid-cols-2 gap-2 py-4 border-b'>
                                    <span className="font-bold">Summary:</span>
                                    <span>{propertyData.summaryDescription}</span>
                                </div>
                                <div className='grid grid-cols-2 gap-2 py-4 border-b'>
                                    <span className="font-bold">Type of Title Deed:</span>
                                    <span>{propertyData.typeOfTitleDeed}</span>
                                </div>
                                <div className='grid grid-cols-2 gap-2 py-4 border-b'>
                                    <span className="font-bold">Status of Possession:</span>
                                    <span>{propertyData.statusOfPossession}</span>
                                </div>
                            </div>
                        </div>
                        {/* Bidding Information */}
                        <div className='border max-w-xl py-6 px-12 bg-white shadow-sm bg-clip-border rounded-xl'>
                            <h1 className='text-2xl font-bold py-4 opacity-60'>Bidding Information:</h1>
                            <div className='flex flex-col gap-6'>
                                <div className='grid grid-cols-2 gap-2 py-4 border-b'>
                                    <span className="font-bold">EMD Rs:</span>
                                    <span>{propertyData.emd}</span>
                                </div>
                                <div className='grid grid-cols-2 gap-2 py-4 border-b'>
                                    <span className="font-bold">EMD Last Date:</span>
                                    <span>{propertyData.emdLastDate}</span>
                                </div>
                                <div className='grid grid-cols-2 gap-2 py-4 border-b'>
                                    <span className="font-bold">Sealed Bid Last Date:</span>
                                    <span>{propertyData.sealedBidLastDate}</span>
                                </div>
                                <div className='grid grid-cols-2 gap-2 py-4'>
                                    <span className="font-bold">Sealed Bid Extended Date:</span>
                                    <span>{propertyData.sealedBidExtendedDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Location details */}
                    <div className="container flex flex-col gap-12">
                        <div className='border py-6 px-12 bg-white shadow-sm bg-clip-border rounded-xl w-full'>
                            <h1 className='text-2xl font-bold py-4 opacity-60'>Address:</h1>
                            <span className='py-4'>{propertyData.address}</span>
                        </div>
                        <div className='flex gap-12'>
                            {/* Ownership details */}
                            <div className='border max-w-xl py-6 px-12 bg-white shadow-sm bg-clip-border rounded-xl'>
                                <h1 className='text-2xl font-bold py-4 opacity-60'>Ownership details</h1>
                                <div className='flex flex-col gap-6'>
                                    <div className='grid grid-cols-2 gap-2 py-4 border-b'>
                                        <span className="font-bold">Borrower's Name:</span>
                                        <span>{propertyData.borrowerName}</span>
                                    </div>
                                    <div className='grid grid-cols-2 gap-2 py-4'>
                                        <span className="font-bold">Owner's Name:</span>
                                        <span>{propertyData.ownerName}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Bank details */}
                            <div className='border py-6 px-12 bg-white shadow-sm bg-clip-border rounded-xl'>
                                <h1 className='text-2xl font-bold py-4 opacity-60'>Bank details</h1>
                                <div className='grid grid-cols-2 gap-2 py-4 border-b'>
                                    <span className="font-bold"> Authorised Officer:</span>
                                    <span>{propertyData.authorisedOfficerDetail}</span>
                                </div>
                                <div className='grid grid-cols-2 gap-2 py-4'>
                                    <span className="font-bold">Bank</span>
                                    <span>{propertyData.bankName}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
