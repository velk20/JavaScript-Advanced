function rectangle(w, h, color) {
    const rect = {
        width: w,
        height: h,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        // calcArea: function () {
        //     return this.width * this.height
        // }

        calcArea() {
            return this.width * this.height;
        }

    }
    return rect;
}

