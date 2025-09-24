import request from "supertest"
import app from "src/app"

describe("Branch API Routes", () => {
  const testBranchId = 999

  it("GET /api/v1/branches - should return all branches", async () => {
    const res = await request(app).get("/api/v1/branches")
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it("GET /api/v1/branches/:id - should return a single branch", async () => {
    const res = await request(app).get("/api/v1/branches/1")
    expect(res.status).toBe(200)
    expect(res.body.id).toBe(1)
  })

  it("POST /api/v1/branches - should create a new branch", async () => {
    const newBranch = {
      id: testBranchId,
      name: "Debug Branch",
      address: "123 Test St",
      phone: "555-000-1111"
    }
    const res = await request(app).post("/api/v1/branches").send(newBranch)
    expect(res.status).toBe(201)
    expect(res.body.name).toBe("Debug Branch")
  })

  it("PUT /api/v1/branches/:id - should update a branch", async () => {
    const res = await request(app)
      .put(`/api/v1/branches/${testBranchId}`)
      .send({ phone: "555-222-3333" })
    expect(res.status).toBe(200)
    expect(res.body.phone).toBe("555-222-3333")
  })

  it("DELETE /api/v1/branches/:id - should delete a branch", async () => {
    const res = await request(app).delete(`/api/v1/branches/${testBranchId}`)
    expect(res.status).toBe(204)
  })
})
