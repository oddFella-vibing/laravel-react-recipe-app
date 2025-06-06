<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="stylesheet" href="./css/app.css">
    
     <title inertia>{{ config('app.name', 'Laravel') }}</title>
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx',"resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>