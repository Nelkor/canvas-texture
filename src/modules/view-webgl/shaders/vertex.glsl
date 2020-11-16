attribute vec2 a_pos;
attribute vec2 a_texPos;

varying vec2 v_texPos;

void main() {
    v_texPos = a_texPos;

    gl_Position = vec4(a_pos, 0.0, 1.0);
}
