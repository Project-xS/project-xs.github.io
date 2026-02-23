const Refund = () => {
  return (
    <div className="page-container">
      <h1>Refund & Cancellation Policy</h1>
      <p>Last updated: February 23, 2026</p>
      
      <section>
        <h2>1. Cancellation Policy</h2>
        <p>Due to the fast-paced nature of our pre-ordering system and canteen environment, <strong>once an order is placed, there are no cancellations.</strong> Please review your items carefully before completing your payment.</p>
      </section>

      <section>
        <h2>2. Refund Policy</h2>
        <p>As a general rule, food items bought through the XS platform <strong>cannot be refunded.</strong> However, in the rare event that your order is <strong>not fulfilled by the merchant</strong> (for example, due to an item suddenly becoming unavailable or the canteen unexpectedly closing), a full refund will be initiated for the unfulfilled items.</p>
      </section>

      <section>
        <h2>3. Refund Processing</h2>
        <p>For eligible unfulfilled orders, refunds will be processed back to the original payment method used via the PhonePe gateway. Please allow standard banking times (usually 5-7 working days) for the refunded amount to reflect in your account.</p>
      </section>
      
      <section>
        <h2>4. Shipping Policy</h2>
        <p>As XS is an on-campus pre-ordering service, no physical shipping of products is involved. Users are expected to pick up their orders directly from the designated canteen counter.</p>
      </section>
    </div>
  );
};

export default Refund;
