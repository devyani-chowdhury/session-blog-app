from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict

class CartItem(BaseModel):
    item: str
    quantity: int = 1

class CartItems(BaseModel):
    items: list[CartItem]

app = FastAPI()

# Allow all origins, methods, and headers to support no-cors mode
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

cart: Dict[str, int] = {}  # Dictionary to store item_name -> quantity

@app.get("/cart")
def get_cart():
    """Retrieve the current cart contents."""
    return {"cart": cart}

@app.post("/cart/add")
def add_to_cart(cart_items: CartItems):
    """Add multiple items to the cart."""
    for item in cart_items.items:
        if item.quantity < 1:
            raise HTTPException(status_code=400, detail="Quantity must be at least 1")
        cart[item.item] = cart.get(item.item, 0) + item.quantity
    return {"message": "Items added to cart", "cart": cart}


@app.post("/cart/remove")
def remove_from_cart(item: CartItem):
    """Remove an item from the cart."""
    if item.item not in cart:
        raise HTTPException(status_code=404, detail="Item not in cart")
    if item.quantity >= cart[item.item]:
        del cart[item.item]
    else:
        cart[item.item] -= item.quantity
    return {"message": f"Removed {item.quantity} of {item.item} from cart", "cart": cart}

@app.delete("/cart/empty")
def empty_cart():
    """Empty the cart."""
    cart.clear()
    return {"message": "Cart emptied", "cart": cart}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
