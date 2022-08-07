var url = new URL(window.location.href);

if (!url.searchParams.get("useskin")) {
    url.searchParams.append("useskin", "vector");
    location.replace(url);
}