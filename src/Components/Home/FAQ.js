import React from 'react';

const FAQ = () => {
    return (
        <section className="text-gray-800 mt-12 mb-44">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-2xl font-bold text-primary text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How your furniture items are technically distinct from that of others?</summary>
                        <div className="px-4 pb-4">
                            <p>Apart from using hand-picked raw materials, our furniture items are absolutely nail-free and made of basing on time-honored manufacturing techniques like tongue and groove, finger joints, mortise and tenon, dovetail joints.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What’s your Return Policy?</summary>
                        <div className="px-4 pb-4">
                            <p>Furniture items in good condition can be returned in 3 days of purchase. This policy is in place to show respect to the notion that a customer may change his/her mind within a certain period of time and that shouldn’t cost him/her a fortune. Only a 10% service charge will be applied on the total amount of purchase in this case. It is not applicable for Fabric product or upholstered product.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Do you offer any warranty Policy?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>We offer 1 year free of cost after sales service warranty which covers any damages caused due to production defects.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Do you offer any Exchange Policy?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Furniture can be exchanged in good condition within 3 days with 5% service charge. It is not applicable for customized, set broken and fabric products.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Do you offer any Delay Penalty?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Star furniture will pay a delay penalty valuing 0.5% of the value of the goods per week if the delivery is not done within the standard deadline. However, there will be 15 days buffer before any such penalty is applied.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Do you offer any Fitting Policy for Knockdown Furniture?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Star furniture will pay a delay penalty valuing 0.5% of the value of the goods per week if the delivery is not done within the standard deadline. However, there will be 15 days buffer before any such penalty is applied.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;