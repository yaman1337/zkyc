
const SUPPORTED_THEMES = ["dark", "light"] as const;
type Theme = (typeof SUPPORTED_THEMES)[number];

type InferValueFromKey<T extends Theme> = {
    // Map keys to their own values using the conditional type
    [key in T]: key;
};

type ThemeRecord = InferValueFromKey<Theme>;

export const APP_BODY_ID = `app-body`;

export const theme = {
    values(): ThemeRecord {
        // Create the object with correct types upfront
        return SUPPORTED_THEMES.reduce(
            (acc, v) => ({ ...acc, [v]: v }),
            {} as ThemeRecord
        );
    },

    getThemeObject(): ThemeRecord {
        const rValue = {} as ThemeRecord;

        SUPPORTED_THEMES.forEach((v) => {
            (rValue as any)[v] = v; // This can be replaced with direct assignment
        });

        return rValue;
    },

    get(): Theme | null {
        // Check if running in the browser
        if (typeof window === "undefined") return null;

        const theme = localStorage.getItem("app-theme");
        if (!theme) return null;

        const themes = this.values();
        const rValue = themes[theme as Theme];
        return rValue || null; // Return null if the theme is not found
    },

    apply(theme: Theme) {
        console.log("@apply theme =>", theme);

        const doc = document.getElementById(APP_BODY_ID);
        if (!doc) {
            console.error(
                `@Element get '${APP_BODY_ID}' returned falsy value! \n Theme Service is now Exiting!`
            );
            return;
        }

        const classToRemove: Theme = theme === "light" ? "dark" : "light";
        doc.classList.remove(classToRemove);
        doc.classList.add(theme);

        // Check if running in the browser before accessing localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem("app-theme", theme);
        }
    },

    toggle() {
        this.apply(this.isDark() ? "light" : "dark");
    },

    initiate() {
        const theme = this.get();
        console.log("@theme.init() => ", theme);

        if (theme) this.apply(theme);
    },

    isDark() {
        return this.get() === this.values().dark;
    },
};
