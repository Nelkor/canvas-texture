precision lowp float;

uniform sampler2D u_sampler;

varying vec2 v_texPos;

void main() {
    gl_FragColor = texture2D(u_sampler, v_texPos).gbra;
}
