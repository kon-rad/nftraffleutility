import React, { useState } from 'react';
import type { TinaTemplate } from "tinacms";
import { Button } from '../molecules/button';

export const Raffle = () => {
    const [name, setName] = useState<string>("");
    const [nftAddress, setNftAddress] = useState<string>("");
    const [nftTokenId, setNftTokenId] = useState<string>("");
    const [ticketPrice, setTicketPrice] = useState<string>("");
    const [ticketGoal, setTicketGoal] = useState<number>(10);
    const [raffleDuration, setRaffleDuration] = useState<number>(30);

    const handleSubmit = () => {
        console.log("submit");
    }
    return (
        <div
            className="flex-1 my-11 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-5xl mx-auto"
            style={{ flexBasis: "16rem" }}
        >
            <h3 className={`prose prose-lg mx-auto lg:mx-0 mb-10 prose-primary my-6`}>Raffle</h3>
            <h5 className={`prose prose-lg mx-auto lg:mx-0 mb-10 prose-primary my-6`}>Create a raffle</h5>
            <input value={name} onChange={(e: any) => setName(e.target.value)} placeholder="name" className="input-primary"/>
            <input value={nftAddress} onChange={(e: any) => setNftAddress(e.target.value)} placeholder="nftAddress" className="input-primary"/>
            <input value={nftTokenId} onChange={(e: any) => setNftTokenId(e.target.value)} placeholder="nftTokenId" className="input-primary"/>
            <input value={ticketPrice} onChange={(e: any) => setTicketPrice(e.target.value)} placeholder="ticketPrice" className="input-primary"/>
            <input value={ticketGoal} onChange={(e: any) => setTicketGoal(e.target.value)} placeholder="ticketGoal" className="input-primary"/>
            <input value={raffleDuration} onChange={(e: any) => setRaffleDuration(e.target.value)} placeholder="raffleDuration" className="input-primary"/>
            <Button type="primary" onClick={handleSubmit}>Create</Button>

        {/* string memory _name,
        address _prizeNFTAddress,
        uint256 _prizeNFTTokenId,
        uint256 _ticketPrice,
        uint256 _ticketGoal,
        uint256 _raffleDurationDays */}
        </div>
    )
}
