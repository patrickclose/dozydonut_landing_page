import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        ourstory: 'our-story.html',
        contact: 'contact.html',
        checkoutbilling: 'checkout-billing.html',
        checkoutconsultation: 'checkout-consultation.html',
        checkoutsummary: 'checkout-summary.html',
        dozyai: 'dozy-ai.html',
        freeconsultation: 'free-consultation.html',
        ourstory: 'our-story.html',
        packagebasic: 'package-basic.html',
        packageessential: 'package-essential.html',
        package3: 'package-3.html',
        payment: 'payment.html',
        products: 'products.html',
        thankyou: 'thank-you.html',
        webdesign: 'web-design.html',
      },
    },
  },
});
