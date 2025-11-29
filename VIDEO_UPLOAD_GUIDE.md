# Video Upload Guide

## How to Add Your Portfolio Video Montage

### Step 1: Prepare Your Video

Your video should be:
- **Format:** MP4 (most compatible)
- **Recommended Resolution:** 1920x1080 (1080p) or higher
- **Aspect Ratio:** 16:9 (widescreen)
- **File Size:** Keep under 50MB for best performance (compress if needed)
- **Content:** Looping montage of your best automotive shots

### Step 2: Create the Video Folder

1. Navigate to your project folder:
   ```
   /Users/austinstarke/Desktop/starke media site/
   ```

2. Inside the `public` folder, create a new folder called `video`:
   ```
   public/
   └── video/
   ```

### Step 3: Add Your Video

1. Rename your video file to: `portfolio-reel.mp4`

2. Place it in the video folder:
   ```
   public/
   └── video/
       └── portfolio-reel.mp4
   ```

### Step 4: That's It!

The video will automatically appear in the Portfolio section. No code changes needed!

The video player includes:
- ✅ Auto-loop (plays continuously)
- ✅ User controls (play, pause, volume, fullscreen)
- ✅ Bronze-themed border with hover glow
- ✅ Responsive (works on mobile and desktop)

---

## Optional: Customize Video Behavior

If you want to change the video settings, edit `/components/Portfolio.tsx`:

```tsx
<video
  className="w-full h-full object-cover"
  controls          // Show video controls
  loop              // Loop continuously
  autoplay          // Auto-play on load (optional)
  muted             // Mute by default (required for autoplay)
  playsInline       // Better mobile support
  poster="..."      // Thumbnail before play
>
```

### Example: Auto-play on Load

```tsx
<video
  className="w-full h-full object-cover"
  autoplay
  muted
  loop
  playsInline
>
```

---

## Video Compression Tips

If your video is too large, use these free tools:

**Online:**
- [HandBrake](https://handbrake.fr/) (free, open-source)
- [Clipchamp](https://clipchamp.com/) (online)

**Settings for compression:**
- Resolution: 1920x1080
- Bitrate: 5-8 Mbps
- Format: H.264 MP4

---

## Troubleshooting

**Video not showing?**
1. Check file path: `public/video/portfolio-reel.mp4`
2. Check file name is exact (case-sensitive)
3. Refresh browser with Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

**Video not playing?**
1. Try a different browser
2. Check video format is MP4
3. Make sure video isn't corrupted

**Video quality looks bad?**
1. Upload higher resolution (1080p minimum)
2. Check compression settings
3. Ensure original footage is high quality

---

Your video will look stunning with the dark luxury aesthetic! 🎬✨

