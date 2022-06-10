export class FormatService {

    public static formatTime(time: string): string {
        return time.substring(11, 16)
    }

    public static formatPlatform(platform: string): string {
        if (!platform) return '';
        if (!isNaN(Number(platform[0]))) {
            return `Pl. ${platform}`
        } else {
            return `Kante ${platform}`;
        }
    }

    static formatDelay(delay: string): string {
        return delay ? `+${delay}'` : '';
    }
}
