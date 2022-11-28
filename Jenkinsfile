pipeline {
  agent{
    docker{
      image 'node:14'
    }
  }
  stages {
    stage("install"){
      steps {
        sh "yarn"
      }
    }
  
    stage("build") {
      steps {
        sh "yarn build"
      }
    }
  }
}