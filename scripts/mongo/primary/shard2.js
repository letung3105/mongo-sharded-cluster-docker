rs.initiate({
	"_id" : "shard2rs",
  	"members" : [
  		{
  			"_id" : 0,
  			"host" : "shard2a:27017"
  		},
  		{
  			"_id" : 1,
  			"host" : "shard2b:27017"
  		},
  		{
  			"_id" : 2,
  			"host" : "shard2c:27017"
  		}
  	]
})