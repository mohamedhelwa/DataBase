rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
      
      match /articles/{articles}/documents {
      	allow create: if request.resource.data.keys().hasAll(['title', 'chars', 'content', 'departmentName']);
        
        allow create: if (request.resource.data.title is string &&
          request.resource.data.chars is int &&
          request.resource.data.content is string &&
          request.resource.data.content is string &&
          request.resource.data.departmentName is string
        );
        
        allow update: if (request.resource.data.title is string &&
          request.resource.data.chars is int &&
          request.resource.data.content is string &&
          request.resource.data.content is string &&
          request.resource.data.departmentName is string
        );
    	}
    
    }
    
  }
}