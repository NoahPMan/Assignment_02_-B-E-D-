import request from "supertest"
import app from "../../src/app"

describe("Employee API Routes", () => {
  let testEmployeeId = 999

  it("GET /api/v1/employees - should return all employees", async () => {
    const res = await request(app).get("/api/v1/employees")
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it("GET /api/v1/employees/:id - should return a single employee", async () => {
    const res = await request(app).get("/api/v1/employees/1")
    expect(res.status).toBe(200)
    expect(res.body.id).toBe(1)
  })

  it("POST /api/v1/employees - should create a new employee", async () => {
    const newEmployee = {
      id: testEmployeeId,
      name: "Test User",
      position: "Tester",
      department: "QA",
      email: "test.user@pixell-river.com",
      phone: "555-999-9999",
      branchId: 1
    }
    const res = await request(app).post("/api/v1/employees").send(newEmployee)
    expect(res.status).toBe(201)
    expect(res.body.name).toBe("Test User")
  })

  it("PUT /api/v1/employees/:id - should update an employee", async () => {
    const res = await request(app)
      .put(`/api/v1/employees/${testEmployeeId}`)
      .send({ position: "Updated Tester" })
    expect(res.status).toBe(200)
    expect(res.body.position).toBe("Updated Tester")
  })

  it("DELETE /api/v1/employees/:id - should delete an employee", async () => {
    const res = await request(app).delete(`/api/v1/employees/${testEmployeeId}`)
    expect(res.status).toBe(204)
  })
})

it("GET /api/v1/employees/branch/:branchId - should return employees for a branch", async () => {
  const res = await request(app).get("/api/v1/employees/branch/1")
  expect(res.status).toBe(200)
  expect(Array.isArray(res.body)).toBe(true)
})

it("GET /api/v1/employees/department/:department - should return employees for a department", async () => {
  const res = await request(app).get("/api/v1/employees/department/QA")
  expect(res.status).toBe(200)
  expect(Array.isArray(res.body)).toBe(true)
})
