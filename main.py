import fastapi
import uvicorn

app = fastapi.FastAPI()

@app.get("/name/{name}")
async def name(name):
  return {
    "Name": name,
    "No. of characters": len(name)
  }

uvicorn.run(app=app)