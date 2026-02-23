const Privacy = () => {
  return (
    <div className="page-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: February 15, 2026</p>

      <section>
        <h2>1. Information Collection</h2>
        <p>We collect information necessary to provide and improve our services. This includes personal information provided during account creation via secure authentication providers (such as Google), as well as details related to your orders, food preferences, and app usage patterns.</p>
      </section>

      <section>
        <h2>2. Use of Information</h2>
        <p>The data we collect is used primarily to facilitate orders, process payments, and personalize your experience within the XS platform. We also use aggregated, non-identifying data for internal analytics to optimize our canteen services.</p>
      </section>

      <section>
        <h2>3. Data Security</h2>
        <p>We take the security of your data seriously. We use industry-standard encryption and secure server protocols to protect your personal information and account credentials against unauthorized access, disclosure, or alteration.</p>
      </section>

      <section>
        <h2>4. Third-Party Services</h2>
        <p>To provide a seamless experience, we integrate with trusted third-party service providers. This includes <strong>Firebase</strong> for secure authentication and <strong>PhonePe</strong> for payment processing. When you make a payment, your data is handled according to PhonePe's security standards to ensure funds are routed correctly to the respective canteen merchants.</p>
      </section>

      <section>
        <h2>5. Data Retention</h2>
        <p>We retain your information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by legal and regulatory obligations.</p>
      </section>
    </div>
  );
};

export default Privacy;
