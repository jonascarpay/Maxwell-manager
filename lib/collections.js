Issues   = new Mongo.Collection("issues");
Editors  = new Mongo.Collection("editors");
// Articles has to be loaded last as it refers to other collections
Articles = new Mongo.Collection("articles");
