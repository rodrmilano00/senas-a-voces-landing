Add-Type -AssemblyName System.Drawing

$inputDir = Resolve-Path 'assets'
$outputDir = Resolve-Path 'src\assets'
$items = @(
  'IMG_9635.jpg',
  'IMG_9663.jpg',
  'IMG_9672.jpg',
  'IMG_9688.jpg',
  'IMG_9700.jpg',
  'IMG_9726-Enhanced-NR.jpg',
  'IMG_9730-Enhanced-NR.jpg',
  'IMG_9738-Enhanced-NR.jpg',
  'IMG_9748-Enhanced-NR.jpg'
)
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoder = [System.Drawing.Imaging.Encoder]::Quality
$params = New-Object System.Drawing.Imaging.EncoderParameters(1)
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, 88L)

foreach ($name in $items) {
  $baseName = [System.IO.Path]::GetFileNameWithoutExtension($name)
  $inPath = Join-Path $inputDir $name
  $outPath = Join-Path $outputDir "$baseName-optimized.jpg"
  $img = [System.Drawing.Image]::FromFile($inPath)
  $targetW = 2200
  $targetH = [int]([double]$img.Height * $targetW / $img.Width)
  $bmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.DrawImage($img, 0, 0, $targetW, $targetH)
  $bmp.Save($outPath, $codec, $params)
  $g.Dispose()
  $bmp.Dispose()
  $img.Dispose()
  $info = Get-Item $outPath
  "$($info.Name) $([Math]::Round($info.Length / 1MB, 2))MB"
}
