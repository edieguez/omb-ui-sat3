package main

import (
  "fmt"
  "github.com/gin-contrib/cors"
  "github.com/gin-gonic/gin"
  "net/http"
  "time"
)

type Account struct {
  ID             string    `json:"id,omitempty"`
  Name           string    `json:"name,omitempty"`
  RoutingNumber  string    `json:"routingNumber,omitempty"`
  AccountNumber  string    `json:"accountNumber,omitempty"`
  OpenDate       time.Time `json:"openDate"`
  CurrentBalance int64     `json:"currentBalance,omitempty"`
}

type DepositRequest struct {
  Amount int64 `json:"amount,omitempty"`
}

func main() {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "PUT", "PATCH", "POST", "OPTIONS"},
		AllowHeaders:     []string{"Origin","content-type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

  accounts := []*Account{
    { ID: "__ASDAMSA8CM32DDAccount1ASD", Name: "Account 1", RoutingNumber: "123", AccountNumber: "450", OpenDate: time.Now().AddDate(-1, 0, 0), CurrentBalance: 0},
    { ID: "__284CFMU359M28CAccount2ZXC", Name: "Account 2", RoutingNumber: "123", AccountNumber: "451", OpenDate: time.Now().AddDate(-2, 0, 0), CurrentBalance: 200},
    { ID: "__C239RHMXR293MHAccount3HJK", Name: "Account 3", RoutingNumber: "123", AccountNumber: "452", OpenDate: time.Now().AddDate(-3, 0, 0), CurrentBalance: 760},
  }

	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"data": accounts})
	})

  r.POST("/accounts/:accountId/deposit", func(c *gin.Context) {
    var req DepositRequest
    if err := c.BindJSON(&req); err != nil {
      c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
      return
    }

    id := c.Param("accountId")

    for _, acc := range accounts {
      if acc.ID == id {
        acc.CurrentBalance += req.Amount
        c.JSON(http.StatusOK, gin.H{"status": "ok"})
        return
      }
    }

    statusMsg := fmt.Sprintf("account with ID %s does not exist", id)
    c.JSON(http.StatusNotFound, gin.H{"status": statusMsg})
  })
	_ = r.Run(":7000")
}
