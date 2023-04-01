// API routes get =>  /api/testData
export default function handler(req, res) {
  var data = [
    {
    id:1,
    name:'mohammad'
  },
  {
    id:2,
    name:'ali'
  },
  {
    id:3,
    name:'reza'
  }
  ]
    
  res.status(200).json(data)
}
