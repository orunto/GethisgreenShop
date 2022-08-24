require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(
  cors({
    origin: "https://www.gethisgreen.com",
  })
)

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
  [1, { priceInCents: 6900, name: "1 Midnight Black Pen in a Box (Black)" }],
  [2, { priceInCents: 6900, name: "1 Midnight Black Pen in a Box (Blue)" }],
  [3, { priceInCents: 6900, name: "1 Midnight Black Pen in a Box (Green)" }],
  [4, { priceInCents: 6900, name: "1 Midnight Black Pen in a Box (Red)" }],
  [5, { priceInCents: 14900, name: "3 Midnight Black Pens in a Box (Black)" }],
  [6, { priceInCents: 14900, name: "3 Midnight Black Pens in a Box (Blue)" }],
  [7, { priceInCents: 14900, name: "3 Midnight Black Pens in a Box (Green)" }],
  [8, { priceInCents: 14900, name: "3 Midnight Black Pens in a Box (Red)" }],
  [9, { priceInCents: 6900, name: "1 Midnight Black Pen in a Box (Black)" }],
  [10, { priceInCents: 6900, name: "1 Midnight Black Pen in a Box (Blue)" }],
  [11, { priceInCents: 6900, name: "1 Midnight Black Pen in a Box (Green)" }],
  [12, { priceInCents: 6900, name: "1 Midnight Black Pen in a Box (Red)" }],
  [13, { priceInCents: 14900, name: "3 Midnight Black Pens in a Box (Black)" }],
  [14, { priceInCents: 14900, name: "3 Midnight Black Pens in a Box (Blue)" }],
  [15, { priceInCents: 14900, name: "3 Midnight Black Pens in a Box (Green)" }],
  [16, { priceInCents: 14900, name: "3 Midnight Black Pens in a Box (Red)" }],
  [17, { priceInCents: 2500, name: "Leather Case" }],
])

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.CLIENT_URL}/products/black.html`,
      cancel_url: `${process.env.CLIENT_URL}/products/black.html`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.listen(3000)
