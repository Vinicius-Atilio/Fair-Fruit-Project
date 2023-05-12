import { createContext, useContext, useState } from 'react';

const PaymentContext = createContext();
PaymentContext.displayName = 'payment';

export function PaymentProvider({ children }) {
    const paymentTypes = [
        {
            name: 'Ticket',
            fees: 1,
            id: 1,
        },
        {
            name: 'Credit Card',
            fees: 1.3,
            id: 2,
        },
        {
            name: 'PIX',
            fees: 1,
            id: 3,
        },
        {
            name: 'Installment plan',
            fees: 1.5,
            id: 4,
        },
    ];
    const [paymentType, setPaymentTypes] = useState(paymentTypes[0]);

    return (
        <PaymentContext.Provider
            value={{
                paymentType,
                setPaymentTypes,
                paymentTypes,
            }}
        >
            {children}
        </PaymentContext.Provider>
    );
}

export function usePayment() {
    const { paymentType, setPaymentTypes, paymentTypes } =
        useContext(PaymentContext);

    function changePayment(id) {
        const newType = paymentTypes.find((payment) => payment.id === id);
        setPaymentTypes(newType);
    }

    return {
        paymentType,
        changePayment,
        paymentTypes,
    };
}
