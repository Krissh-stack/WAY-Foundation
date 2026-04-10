$queries = @(
  @{term='students India school uniform'; file='realistic-hero.jpg'},
  @{term='classroom school village India'; file='realistic-education.jpg'},
  @{term='computer literacy India'; file='realistic-digital.jpg'},
  @{term='tree planting India volunteers'; file='realistic-community.jpg'}
)

foreach ($q in $queries) {
    $apiUrl = "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=$([uri]::EscapeDataString($q.term))&gsrnamespace=6&prop=imageinfo&iiprop=url&format=json&gsrlimit=5"
    $response = Invoke-RestMethod -Uri $apiUrl -Headers @{'User-Agent'='WayBot/1.0'}
    $pages = $response.query.pages
    if ($null -ne $pages) {
        $imgUrl = $null
        foreach ($prop in $pages.PSObject.Properties) {
            $url = $prop.Value.imageinfo[0].url
            if ($url -match '\.(jpg|jpeg|png)$' -and $url -notmatch '1880|1890|Carlisle') {
                $imgUrl = $url
                break
            }
        }
        
        if ($null -ne $imgUrl) {
            Write-Host "Downloading $($q.file) from $imgUrl"
            Invoke-WebRequest -Uri $imgUrl -OutFile "src\assets\$($q.file)" -UserAgent 'WayBot/1.0'
        } else {
            Write-Host "No JPG/PNG found for $($q.term)"
        }
    } else {
        Write-Host "No results for $($q.term)"
    }
}
