import React, { useState } from 'react';
import type { TinaTemplate } from "tinacms";

export const Raffle = () => {
    const [name, setName] = useState<string>("");
    return (
        <div
            className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
            style={{ flexBasis: "16rem" }}
        >
            <h3 className={`prose prose-lg mx-auto lg:mx-0 mb-10 prose-primary my-6`}>Raffle</h3>
            <h5 className={`prose prose-lg mx-auto lg:mx-0 mb-10 prose-primary my-6`}>Create a raffle</h5>
            <input value={name} onChange={(e: any) => setName(e.target.value)} placeholder="name" />
        </div>
    )
}
